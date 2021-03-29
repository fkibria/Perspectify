import React from "react"
import Article from "../Article"
import Col from "../Col"
import Row from "../Row"
import ProfileName from '../ProfileName'
import ProfilePic from "../ProfilePic"
import Container from "../Container"
import DonutChart from "../DonutChart"
import "./style.css"
import RecentActivity from '../RecentActivity/index'

function Profile() {
    return (
        <div>
            <Row>
                <Col size="2"><ProfilePic></ProfilePic></Col>
                <Col size="3"><ProfileName></ProfileName></Col>
            </Row>
            <br>
            </br>
            <Container>
                <Row><h3>Recent Activity</h3></Row>
                <Row><Col size="8"><DonutChart></DonutChart></Col>
                    <Col size="4"><Row><h5>Your Activities</h5></Row>
                        <RecentActivity></RecentActivity>
                        
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <br>
            </br>
            <Row>
                <Col size="4">
                    <Article />
                </Col>

            </Row>
        </div>
    )
}

export default Profile