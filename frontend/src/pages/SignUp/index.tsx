import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  FormContainer,
  FormTitle,
  InputContainer,
  InputName,
  InputField,
  SendButton,
} from './styles';

import SideMenu from '../../components/SideMenu';

import api from '../../services/api';

interface Errors {
  errors: string[];
}

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [job, setJob] = useState('');
  const [salary, setSalary] = useState('');
  const [uf, setUF] = useState('');
  const [status, setStatus] = useState('');
  const [signUpDate, setSignUpDate] = useState('');

  const handleFormSend = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        cpf: Yup.string()
          .required('CPF é obrigatório')
          .length(11, 'CPF deve possuir 11 números'),
        job: Yup.string().required('Cargo é obrigatório'),
        signUpDate: Yup.string().required('Data de cadastro é obrigatório'),
        uf: Yup.string()
          .required('UF é obrigatório')
          .length(2, 'UF deve ser duas letras'),
        formattedSalary: Yup.number().required('Salário é obrigatório'),
        status: Yup.string().required('Status é obrigatório'),
      });

      const formattedSalary = Number(salary);
      await schema.validate(
        { name, cpf, job, signUpDate, uf, formattedSalary, status },
        {
          abortEarly: false,
        },
      );

      const newCollaborator = {
        name,
        cpf,
        job,
        salary: formattedSalary,
        uf,
        status,
        signUpDate,
      };

      await api.post('/', newCollaborator);

      setName('');
      setCPF('');
      setJob('');
      setSalary('');
      setUF('');
      setStatus('');
      setSignUpDate('');

      toast('Funcionário cadastrado', { autoClose: 5000 });
    } catch (err) {
      if (err.errors) {
        const { errors }: Errors = err;
        errors.map(errorMessage => toast(errorMessage, { autoClose: 5000 }));
      } else {
        toast('Falha no cadastro de novo funcionário. Tente novamente!', {
          autoClose: 5000,
        });
      }
    }
  }, [name, cpf, job, signUpDate, salary, uf, status]);

  return (
    <Container>
      <SideMenu selected />

      <FormContainer>
        <FormTitle>Cadastro de novo funcionário</FormTitle>

        <InputContainer>
          <InputName>Nome:</InputName>
          <InputField
            value={name}
            placeholder="Aaron Aaby"
            onChange={e => setName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>CPF:</InputName>
          <InputField
            value={cpf}
            placeholder="00011122234"
            onChange={e => setCPF(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>Cargo:</InputName>
          <InputField
            value={job}
            placeholder="PO Sr"
            onChange={e => setJob(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>Salário:</InputName>
          <InputField
            value={salary}
            placeholder="325"
            onChange={e => setSalary(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>UF:</InputName>
          <InputField
            value={uf}
            placeholder="MG"
            onChange={e => setUF(e.target.value.toUpperCase())}
          />
        </InputContainer>

        <InputContainer>
          <InputName>Status:</InputName>
          <RadioGroup
            defaultValue="female"
            aria-label="gender"
            name="customized-radios"
            row
            onChange={e => setStatus(e.target.value)}
            style={{ marginLeft: 20 }}
          >
            <FormControlLabel value="ATIVO" control={<Radio />} label="Ativo" />
            <FormControlLabel
              value="INATIVO"
              control={<Radio />}
              label="Inativo"
            />
            <FormControlLabel
              value="BLOQUEADO"
              control={<Radio />}
              label="Bloqueado"
            />
          </RadioGroup>
        </InputContainer>

        <InputContainer>
          <InputName>Data de cadastro:</InputName>
          <InputField
            value={signUpDate}
            type="date"
            onChange={e => setSignUpDate(e.target.value)}
          />
        </InputContainer>
        <SendButton onClick={handleFormSend}>Cadastrar</SendButton>
      </FormContainer>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default SignUp;
