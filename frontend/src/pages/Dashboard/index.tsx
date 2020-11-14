import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  ContentContainer,
  FilterMenu,
  FilterTitle,
  FilterButtonsContainer,
  FilterButton,
  FilterInputContainer,
  SalaryFilterContainer,
  FilterInput,
  Send,
  NoFilterSelectedText,
  TableContainer,
} from './styles';

import SideMenu from '../../components/SideMenu';

import api from '../../services/api';

import formatValue from '../../utils/formatValue';

interface Collaborator {
  id: string;
  name: string;
  job: string;
  cpf: string;
  uf: string;
  salary: number;
  formattedSallary: string;
  status: string;
  signUpDate: string;
}

const Dashboard: React.FC = () => {
  const [collaborators, setCollaborators] = useState<
    Collaborator[] | undefined
  >([]);
  const [filter, setFilter] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/');

      const collaboratorsFormatted = response.data.map(
        (collaborator: Collaborator) => ({
          ...collaborator,
          formattedSallary: formatValue(collaborator.salary),
        }),
      );

      setCollaborators(collaboratorsFormatted);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/');

      const collaboratorsFormatted = response.data.map(
        (collaborator: Collaborator) => ({
          ...collaborator,
          formattedSallary: formatValue(collaborator.salary),
        }),
      );

      setCollaborators(collaboratorsFormatted);
    }

    if (filter === -1) {
      loadData();
    }
  }, [filter]);

  const handleSetFilter = useCallback(
    number => {
      setSearchValue('');
      setMaxSalary('');
      setMinSalary('');
      if (number === filter) {
        setFilter(-1);
      } else setFilter(number);
    },
    [filter],
  );

  const loadFilteredData = useCallback(
    param => {
      async function loadData() {
        const response = await api.get('/list', {
          params: { [`${param}`]: searchValue },
        });

        if (param === 'uf') {
          const collaboratorsFormatted = response.data.arrayCollaborators.map(
            (collaborator: Collaborator) => ({
              ...collaborator,
              formattedSallary: formatValue(collaborator.salary),
            }),
          );

          setCollaborators(collaboratorsFormatted);
        } else {
          const collaboratorsFormatted = response.data.map(
            (collaborator: Collaborator) => ({
              ...collaborator,
              formattedSallary: formatValue(collaborator.salary),
            }),
          );

          setCollaborators(collaboratorsFormatted);
        }
      }
      loadData();
    },
    [searchValue],
  );

  const findByCPF = useCallback((cpf: string) => {
    async function loadData() {
      const response = await api.get(`${cpf}`);

      const collaboratorsFormatted = [
        {
          ...response.data,
          formattedSallary: formatValue(response.data.salary),
        },
      ];

      setCollaborators(collaboratorsFormatted);
    }
    loadData();
  }, []);

  const findBySalary = useCallback((min: string, max: string) => {
    async function loadData() {
      const response = await api.get('/list', {
        params: { min, max },
      });

      const collaboratorsFormatted = response.data.map(
        (collaborator: Collaborator) => ({
          ...collaborator,
          formattedSallary: formatValue(collaborator.salary),
        }),
      );

      setCollaborators(collaboratorsFormatted);
    }
    loadData();
  }, []);

  function handleSearchWithFilter() {
    switch (filter) {
      case 0:
        loadFilteredData('name');
        break;
      case 1:
        findByCPF(searchValue);
        break;
      case 2:
        loadFilteredData('job');
        break;
      case 3:
        findBySalary(minSalary, maxSalary);
        break;
      case 4:
        loadFilteredData('status');
        break;
      case 5:
        loadFilteredData('uf');
        break;
      case 6:
        loadFilteredData('signUpDate');
        break;
      default: {
        setFilter(-1);
      }
    }
  }

  const filterInputs = [
    <FilterInput
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Nome do funcionário"
    />,
    <FilterInput
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="CPF do funcionário"
    />,
    <FilterInput
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Cargo do funcionário"
    />,
    <SalaryFilterContainer>
      <FilterInput
        value={minSalary}
        onChange={e => setMinSalary(e.target.value)}
        placeholder="Valor mínimo de salário"
      />
      <FilterInput
        value={maxSalary}
        onChange={e => setMaxSalary(e.target.value)}
        placeholder="Valor máximo de salário"
      />
    </SalaryFilterContainer>,
    <FilterInput
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Status do funcionário"
    />,
    <FilterInput
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="UF do funcionário"
    />,
    <FilterInput
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Data de cadastro do funcionário"
    />,
  ];

  return (
    <Container>
      <SideMenu selected />
      <ContentContainer>
        <FilterMenu>
          <FilterTitle>Filtrar por:</FilterTitle>
          <FilterButtonsContainer>
            <FilterButton
              selected={filter === 0}
              onClick={() => handleSetFilter(0)}
            >
              Nome
            </FilterButton>
            <FilterButton
              selected={filter === 1}
              onClick={() => handleSetFilter(1)}
            >
              CPF
            </FilterButton>
            <FilterButton
              selected={filter === 2}
              onClick={() => handleSetFilter(2)}
            >
              Cargo
            </FilterButton>
            <FilterButton
              selected={filter === 3}
              onClick={() => handleSetFilter(3)}
            >
              Salário
            </FilterButton>
            <FilterButton
              selected={filter === 4}
              onClick={() => handleSetFilter(4)}
            >
              Status
            </FilterButton>
            <FilterButton
              selected={filter === 5}
              onClick={() => handleSetFilter(5)}
            >
              UF
            </FilterButton>
            <FilterButton
              selected={filter === 6}
              onClick={() => handleSetFilter(6)}
            >
              Data de Cadastro
            </FilterButton>
          </FilterButtonsContainer>
          <FilterInputContainer>
            {filter !== -1 && filterInputs[filter]}
            {filter !== -1 ? (
              <Send onClick={handleSearchWithFilter}>Filtrar</Send>
            ) : (
              <NoFilterSelectedText>
                Nenhum filtro selecionado.
              </NoFilterSelectedText>
            )}
          </FilterInputContainer>
        </FilterMenu>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Cargo</th>
                <th>Salário</th>
                <th>Status</th>
                <th>UF</th>
                <th>Cadastrado</th>
              </tr>
            </thead>

            <tbody>
              {collaborators &&
                collaborators.map(collaborator => (
                  <tr key={collaborator.id}>
                    <td>{collaborator.name}</td>
                    <td>{collaborator.cpf}</td>
                    <td>{collaborator.job}</td>
                    <td>{collaborator.formattedSallary}</td>
                    <td>{collaborator.status}</td>
                    <td>{collaborator.uf}</td>
                    <td>{collaborator.signUpDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
