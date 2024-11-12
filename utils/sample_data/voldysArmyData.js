import { students, studentsOnDom } from './studentData';
import form from '../../components/form';
import filterBtnRow from '../filterByHouseButton';
import studentAreas from '../studentArea';

const voldysArmy = []; // starts as an empty array

// MUST BE ON MAIN.JS

const events = () => {
  // get form on the DOM on button click
  document.querySelector('#start-sorting').addEventListener('click', () => {
    // put html elements on the DOM on click
    form(); // form
    filterBtnRow(); // filter buttons
    studentAreas(); // students and voldy's army divs
  });

  // target expel buttons to move to voldys army

  document.querySelector('#student-container').addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex((student) => student.id === Number(id));

      // move from one array to another

      voldysArmy.push(...students.splice(index, 1));

      // get both sets of students on the DOM

      studentsOnDom('#students', students);
      studentsOnDom('#voldy', voldysArmy);
    }
  });
};

export default events;
