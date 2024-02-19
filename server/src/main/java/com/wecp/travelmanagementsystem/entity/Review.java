package com.wecp.travelmanagementsystem.entity;

import javax.persistence.*;

@Entity
@Table(name="review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String reviewDetails;

//Complete the Code
//Complete the Mapping


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getReviewDetails() {
        return reviewDetails;
    }

    public void setReviewDetails(String reviewDetails) {
        this.reviewDetails = reviewDetails;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public TravelDestination getTravelDestination() {
        return travelDestination;
    }

    public void setTravelDestination(TravelDestination travelDestination) {
        this.travelDestination = travelDestination;
    }
}
