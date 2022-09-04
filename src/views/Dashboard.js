import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import { getSubjects } from "services/QuizService.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Table,
  Row,
  Col
} from "reactstrap";


// core components
import { getTakeQuizCount } from "services/DashboardService.js";
import { useDispatch, useSelector } from "react-redux";
import { setQuizCountState, setQuizPercentageState, setQuizResultState } from "Redux/QuizGraphSlice"
import { setSubjectsState } from "Redux/SubjectSlice.js";
import { getTakeQuizPercentage } from "services/DashboardService";
import { getTakeQuizResult } from "services/DashboardService";

function Dashboard(props) {


  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState("English")
  const [subjectId, setSubjectId] = useState(1);

  const studentToken = useSelector((state) => state.student.token);
  const subjects = useSelector((state) => state.subject.value);
  const subjectCount = useSelector((state) => state.quizGraphData.count)
  const quizPercentage = useSelector((state) => state.quizGraphData.percentage)
  const quizResults = useSelector((state) => state.quizGraphData.results)



  const dispatch = useDispatch();

  let label = subjectCount.map((data) => {
    const labelName = data.quizmonth + ',' + data.quizYear
    return labelName
  })

  let labelCount = subjectCount.map((data) => {
    const count = data.subjectCount;
    return count;
  })

  let labelPercentage = quizPercentage.map((data) => {
    return data.quizDay + '/' + data.quizMonthNumber + '/' + data.quizYear;
  })

  let labelPercentageValue = quizPercentage.map((data) => {
    return data.Percentage
  })

  let labelTotalMark = quizPercentage.map((data) => {
    return data.totalScore;
  })

  let labelTotalOverMark = quizPercentage.map((data) => {
    return data.totalOvers - data.totalScore;
  })



  useEffect(() => {
    /* Calling the getTakeQuizCount function and passing in the studentToken and subjectId. It is then
    dispatching the setQuizCountState function with the value returned from the getTakeQuizCount
    function. */
    getTakeQuizCount({ studentToken, subjectId }).then((value) => {
      dispatch(setQuizCountState(value))
    })

    /* Calling the getTakeQuizPercentage function and passing in the studentToken and subjectId. It is
    then dispatching the setQuizPercentageState function with the value returned from the
    getTakeQuizPercentage function. */
    getTakeQuizPercentage({ studentToken, subjectId }).then((value) => {
      dispatch(setQuizPercentageState(value));
    })

    /* Calling the getSubjects() function and then dispatching the setSubjectsState() function. */
    getSubjects().then((value) => {
      dispatch(setSubjectsState(value.data))
    })

    /* Calling the getTakeQuizResult function and passing in the studentToken and subjectId. */
    getTakeQuizResult({ studentToken, subjectId }).then((value) => {

      dispatch(setQuizResultState(value))
    })

  }, [dispatch, studentToken, subjectId])

  /* Creating a chart1_2_options object. */
  let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };

  /* Setting the options for the stacked chart. */
  let stacked_chart_options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    events: [],
    responsive: true,
    scales: {
      yAxes:
      {
        barPercentage: 1,
        stacked: true,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
      ,
      xAxes:
      {
        barPercentage: 1,
        stacked: true,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }

    }
  }

  /* Creating a chart object. */
  let quizCountChart = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: label,
        datasets: [
          {
            label: "Count",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            tension: 0.4,
            data: labelCount
          }
        ]
      };
    },
    options: chart1_2_options
  }

  /* Creating a chart with the data from the arrays. */
  let quizMarksPercentage = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: labelPercentage,
        datasets: [
          {
            label: "Percentage",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            tension: 0.4,
            data: labelPercentageValue
          }
        ]
      };
    },
    options: chart1_2_options
  }

  /* Creating a chart with two datasets. */
  let quizMarksStacked = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: labelPercentage,
        datasets: [
          {
            label: "Total Marks",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            tension: 0.4,
            data: labelTotalMark
          },
          {
            label: "Total Over",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "rgb(75, 192, 192)",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "rgb(75, 192, 192)",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            tension: 0.4,
            data: labelTotalOverMark
          }
        ]
      };
    },
    options: stacked_chart_options
  }


  return (
    <>
      <div className="content">
        <Row>
          {/*A dropdown menu that is used to select a subject. */}
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Number of Quiz Taken</h5>
                    <CardTitle tag="h2">Quiz Count</CardTitle>
                  </Col>
                  <Col sm="6">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'} className="btn-group-toggle float-right">
                      <DropdownToggle caret style={{ "width": "200px" }}>{selectedSubject}</DropdownToggle>
                      <DropdownMenu style={{ "overflowY": "scroll", "height": "130px", "width": "200px" }}>
                        {
                          subjects.map((subject) => {
                            return (
                              <DropdownItem key={subject.id} onClick={() => { setSelectedSubject(subject.name); setSubjectId(subject.id) }}>
                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                  {subject.name}
                                </span>
                                <span className="d-block d-sm-none">
                                  {subject.name}
                                </span>
                              </DropdownItem>
                            )
                          })
                        }
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={quizCountChart.data}
                    options={quizCountChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* Creating a chart using the react-chartjs-2 library. */}
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Percentage of All Quiz Taken</h5>
                <CardTitle tag="h3">
                  Total Quiz Percentage
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={quizMarksPercentage.data}
                    options={quizMarksPercentage.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* Creating a bar chart using the react-chartjs-2 library. */}
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Marks of Quiz</h5>
                <CardTitle tag="h3">
                  Marks of Quiz Taken
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={quizMarksStacked.data}
                    options={quizMarksStacked.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* Mapping the quizResults array and returning a table row for each element in the array. */}
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">List of Scores</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Marks Scored</th>
                      <th>Quiz Total Mark</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      quizResults.map((quizResult) => {
                        let event = new Date(quizResult.quizdate);
                        return (
                          <tr>
                            <td>{quizResult.currentscore}</td>
                            <td>{quizResult.quiztotal}</td>
                            <td>{event.toDateString()}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
