import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/sortingStudentButton';
import events from '../utils/sample_data/voldysArmyData';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
