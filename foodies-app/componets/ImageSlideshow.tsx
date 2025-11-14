"use client"

import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import ImageSlideOne from "../assets/banner1.jpeg";
import ImageSlideTwo from "../assets/banner2.jpg";
import ImageSlideThree from "../assets/banner3.jpg";

const ImageSlideshow: React.FC = () => {
    const slides = [
        {
            id: 1,
            title: "Delicious Food Delivered",
            subtitle: "Order your favourite meals in minutes.",
            image: ImageSlideOne,
        },
        {
            id: 2,
            title: "Fresh & Healthy",
            subtitle: "Handpicked ingredients, cooked with care.",
            image: ImageSlideTwo,
        },
        {
            id: 3,
            title: "Fast & Reliables",
            subtitle: "On-time delivery, every time.",
            image: ImageSlideThree,
        },
    ];

    return (
        <Carousel fade interval={3000} pause="hover">
            {slides.map((slide) => (
                <Carousel.Item key={slide.id}>
                    <Image
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.title}
                        style={{ objectFit: "cover", maxHeight: "600px" }}
                        width={1200}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3">
                        <h3>{slide.title}</h3>
                        <p>{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageSlideshow;
