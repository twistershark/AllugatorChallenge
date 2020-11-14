import React, { useCallback, useState } from 'react';
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

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [job, setJob] = useState('');
  const [salary, setSalary] = useState('');
  const [UF, setUF] = useState('');
  const [status, setStatus] = useState('');
  const [signUpDate, setSignUpDate] = useState('');

  const handleFormSend = useCallback(() => {
    async function createNewCollaborator() {
      const newCollaborator = {
        name,
        cpf: CPF,
        job,
        salary: Number(salary),
        uf: UF,
        status,
        signUpDate,
      };

      const response = await api.post('/', newCollaborator);

      if (response.data) {
        setName('');
        setCPF('');
        setJob('');
        setSalary('');
        setUF('');
        setStatus('');
        setSignUpDate('');

        toast('Funcionário cadastrado', { autoClose: 3000 });
      }
    }

    if (
      name.length &&
      CPF.length === 11 &&
      job.length &&
      salary.length &&
      UF.length === 2 &&
      signUpDate.length
    ) {
      createNewCollaborator();
    } else {
      toast('Preencha todos os dados corretamente!', { autoClose: 3000 });
    }
  }, [name, CPF, job, salary, UF, status, signUpDate]);

  return (
    <Container>
      <SideMenu selected />

      <FormContainer>
        <FormTitle>Cadastro de novo funcionário</FormTitle>

        <InputContainer>
          <InputName>Nome:</InputName>
          <InputField
            value={name}
            required
            placeholder="Aaron Aaby"
            onChange={e => setName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>CPF:</InputName>
          <InputField
            value={CPF}
            required
            placeholder="00011122234"
            onChange={e => setCPF(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>Cargo:</InputName>
          <InputField
            value={job}
            required
            placeholder="PO Sr"
            onChange={e => setJob(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>Salário:</InputName>
          <InputField
            value={salary}
            required
            placeholder="325"
            onChange={e => setSalary(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputName>UF:</InputName>
          <InputField
            value={UF}
            required
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
            required
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
