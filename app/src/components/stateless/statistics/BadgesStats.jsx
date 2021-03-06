import React from 'react';
import { MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';

const BadgesStats = ({data}) => {
    return (
        <MDBCol md="3" className="mb-4">
            <MDBCard className="mb-4">
                <MDBCardHeader>Rivals' average prices</MDBCardHeader>
                <MDBCardBody>
                    <MDBListGroup className="list-group-flush">
                        {   data ? 
                                data.map(course => {
                                    return  <MDBListGroupItem key={course.id}>
                                                {course.course_name}
                                                <MDBBadge color="danger-color" pill className="float-right">
                                                    {course.avg_sum}
                                                    <MDBIcon icon="arrow-up" className="ml-1"/>
                                                </MDBBadge>
                                            </MDBListGroupItem>
                                })
                            : ""
                        }
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}

export default BadgesStats;