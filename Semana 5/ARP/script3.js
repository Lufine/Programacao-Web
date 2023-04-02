/*
Curso de Engenharia de Software - UniEVANGÉLICA
Disciplina de Programação Web
Dev: Luiz Filipe Neuwirth
DATA: 24/03/2023
*/

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const patientList = document.getElementById('patient-list');
  
    const patients = [
      { name: 'Aline Oliveira', cpf: '518.766.284-08' },
      { name: 'Breno da Silva', cpf: '847.802.677-34' },
      { name: 'Camila Souza', cpf: '690.495.372-31' },
      { name: 'Daniel Ferreira', cpf: '225.496.184-51' },
      { name: 'Eduarda Mendes', cpf: '386.164.125-71' },
      { name: 'Fernando Pereira', cpf: '438.301.970-36' },
      { name: 'Gabriela Alves', cpf: '902.765.284-09' },
      { name: 'Henrique Santos', cpf: '652.889.376-17' },
      { name: 'Isabela Martins', cpf: '495.943.175-33' },
      { name: 'João Pedro Castro', cpf: '291.068.754-99' },
      { name: 'Kátia Nunes', cpf: '776.598.184-30' },
      { name: 'Lucas Rodrigues', cpf: '618.229.953-13' },
      { name: 'Marcelo Soares', cpf: '808.424.747-44' },
      { name: 'Nathália Costa', cpf: '201.811.727-08' },
      { name: 'Otávio Carvalho', cpf: '693.858.654-60' },
      { name: 'Paula Oliveira', cpf: '841.880.365-50' },
      { name: 'Quésia Silva', cpf: '461.231.945-73' },
      { name: 'Rafael Santos', cpf: '354.292.327-75' },
      { name: 'Sofia Ferreira', cpf: '787.663.435-08' },
      { name: 'Thiago Oliveira', cpf: '129.723.666-92' },
      { name: 'Vitória Almeida', cpf: '767.986.274-14' },
      { name: 'Wagner Martins', cpf: '561.042.135-72' },
      { name: 'Xavier Lima', cpf: '901.413.795-94' },
      { name: 'Yuri Ribeiro', cpf: '203.542.626-40' },
      { name: 'Zoe Silva', cpf: '519.314.149-55' },
      { name: 'Amanda Castro', cpf: '342.101.162-63' },
      { name: 'Bruno Souza', cpf: '693.214.966-91' },
      { name: 'Carla Almeida', cpf: '758.469.723-03' },
      { name: 'Diego Martins', cpf: '471.904.058-08' },
      { name: 'Eloá Oliveira', cpf: '522.548.176-59' },
      { name: 'Felipe Ribeiro', cpf: '302.604.972-48' },
      { name: 'Gabriel Lima', cpf: '172.210.427-95' },
      { name: 'Henrique Oliveira', cpf: '394.215.845-52' },
      { name: 'Isabelly Costa', cpf: '831.281.349-60' },
      { name: 'Rafaela Souza', cpf: '493.785.380-42' },
      { name: 'Juliana Carvalho', cpf: '826.002.480-87' },
      { name: 'Felipe Alves', cpf: '722.144.600-14' },
      { name: 'Gustavo Lima', cpf: '377.559.920-39' },
      { name: 'Renata Ferreira', cpf: '642.775.840-56' },
      { name: 'Mariana Santos', cpf: '193.988.190-33' },
      { name: 'Rodrigo Oliveira', cpf: '909.114.610-87' },
      { name: 'Isabela Costa', cpf: '526.689.540-01' },
    ];
  
    function displayPatients(patientsToDisplay) {
      patientList.innerHTML = '';
      patientsToDisplay.forEach(patient => {
        const patientDiv = document.createElement('div');
        patientDiv.innerHTML = `<strong>Nome:</strong> ${patient.name} <br> <strong>CPF:</strong> ${patient.cpf}`;
        patientList.appendChild(patientDiv);
      });
    }
  
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = document.getElementById('search').value;
      const filteredPatients = patients.filter(patient =>
        patient.name.includes(searchTerm) || patient.cpf.includes(searchTerm)
      );
      displayPatients(filteredPatients);
    });
  
    displayPatients(patients);
  });