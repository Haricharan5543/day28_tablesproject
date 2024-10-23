import logo from './logo.svg';
import './App.css';
import Studentdetails from './components/Studentdetails';

function App() {
  return (
    <div className="App">
        <div className="detailsDiv">
        <h1> Name:Kumar</h1>
      <table>
      <th>Subject</th>
      <th>Max Marks</th>
      <th>Marks otained</th>
      <th>Result</th>
      <th>Grade</th>
      <tr>
        <td>English</td>
        <td>100</td>
        <td>85</td>
        <td>pass</td>
        <td>A</td>
        </tr>

        <tr>
        <td>Telugu</td>
        <td>100</td>
        <td>80</td>
        <td>pass</td>
        <td>A</td>
        </tr>

        <tr>
        <td>Hindi</td>
        <td>100</td>
        <td>85</td>
        <td>pass</td>
        <td>A</td>
        </tr>

        <tr>
        <td>Maths</td>
        <td>100</td>
        <td>90</td>
        <td>pass</td>
        <td>A</td>
        </tr>

        <tr>
        <td>science</td>
        <td>100</td>
        <td>80</td>
        <td>pass</td>
        <td>A</td>
        </tr>

        <tr>
        <td>Social</td>
        <td>100</td>
        <td>90</td>
        <td>pass</td>
        <td>A</td>
        </tr>  

        <tr>
        <th>Total</th>
        <td>600</td>
        <td></td>
        <td>pass</td>
        <td>A</td>
        </tr>  
     
     </table>
     </div>

     <hr></hr>
     <Studentdetails Name="Raju" englishMarks="75" englishResult="Pass"  englishGrade="B" englishGrade="B"
     teluguMarks="85" teluguResult="Pass"  teluguGrade="A" 
     hindiMarks="65" hindiResult="Pass"  hindiGrade="B" 
     mathsMarks="69" mathsResult="Pass"  mathsGrade="B" 
     scienceMarks="65" scienceResult="Pass"  scienceGrade="B" 
     socialMarks="60" socialResult="Pass"  socialGrade="B" 
     total="485" result="pass" grade="B" ></Studentdetails>

     <Studentdetails Name="Shyam" englishMarks="95" englishResult="Pass"  englishGrade="A" 
     teluguMarks="75" teluguResult="Pass"  teluguGrade="B" 
     hindiMarks="65" hindiResult="Pass"  hindiGrade="B" 
     mathsMarks="75" mathsResult="Pass"  mathsGrade="B" 
     scienceMarks="60" scienceResult="Pass"  scienceGrade="B" 
     socialMarks="65" socialResult="Pass"  socialGrade="B" 
     total="455" result="pass" grade="B" ></Studentdetails>

     <Studentdetails Name="Ramesh" englishMarks="55" englishResult="Pass"  englishGrade="C" 
     teluguMarks="85" teluguResult="Pass"  teluguGrade="A" 
     hindiMarks="65" hindiResult="Pass"  hindiGrade="B" 
     mathsMarks="95" mathsResult="Pass"  mathsGrade="A" 
     scienceMarks="65" scienceResult="Pass"  scienceGrade="B" 
     socialMarks="60" socialResult="Pass"  socialGrade="C" 
     total="528" result="pass" grade="A" ></Studentdetails>

<Studentdetails Name="Shiva" englishMarks="65" englishResult="Pass"  englishGrade="B" 
     teluguMarks="80" teluguResult="Pass"  teluguGrade="A" 
     hindiMarks="69" hindiResult="Pass"  hindiGrade="B" 
     mathsMarks="90" mathsResult="Pass"  mathsGrade="A" 
     scienceMarks="70" scienceResult="Pass"  scienceGrade="B" 
     socialMarks="65" socialResult="Pass"  socialGrade="C" 
     total="498" result="pass" grade="A" ></Studentdetails>

     

    </div>
  );
}

export default App;
