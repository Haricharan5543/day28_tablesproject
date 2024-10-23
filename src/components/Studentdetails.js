import React from 'react'

function Studentdetails(props) {
  return (
    <div>
        <div className="detailsDiv">
      <h1>Name:{props.Name}</h1>
      <table>
      <th>Subject</th>
      <th>Max Marks</th>
      <th>Marks otained</th>
      <th>Result</th>
      <th>Grade</th>
      <tr>
        <td>English</td>
        <td>100</td>
        <td>{props.englishMarks}</td>
        <td>{props.englishResult}</td>
        <td>{props.englishGrade}</td>
        </tr>
        <tr>
        <td>Telugu</td>
        <td>100</td>
        <td>{props.teluguMarks}</td>
        <td>{props.teluguResult}</td>
        <td>{props.teluguGrade}</td>
        </tr>

        <tr>
        <td>Hindi</td>
        <td>100</td>
        <td>{props.hindiMarks}</td>
        <td>{props.hindiResult}</td>
        <td>{props.hindiGrade}</td>
        </tr>

        <tr>
        <td>Maths</td>
        <td>100</td>
        <td>{props.mathsMarks}</td>
        <td>{props.mathsResult}</td>
        <td>{props.mathsGrade}</td>
        </tr>

        <tr>
        <td>Science</td>
        <td>100</td>
        <td>{props.scienceMarks}</td>
        <td>{props.scienceResult}</td>
        <td>{props.scienceGrade}</td>
        </tr>

        <tr>
        <td>Social</td>
        <td>100</td>
        <td>{props.socialMarks}</td>
        <td>{props.socialResult}</td>
        <td>{props.socialGrade}</td>
        </tr>  
        <tr>
        <th>Total</th>
        <td>600</td>
        <td>{props.total}</td>
        <td>{props.result}</td>
        <td>{props.grade}</td>
        </tr>  


      </table>
     
      </div>
      
    </div>
  )
}

export default Studentdetails
