import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  districts=[

    {
      id:1,
      title:"Trivandrum",
      image:"https://as2.ftcdn.net/v2/jpg/04/09/11/59/1000_F_409115987_RYnpEHEBN96XITp9ONhOf8RCZ8IKsvy9.jpg",
      Description:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries."
    },

    {
      id:2,
      title:"Kollam",
      image:"https://media.istockphoto.com/id/843721966/photo/thangassery-lighthouse-on-the-cliff-surrounded-by-palm-trees-and-big-sea-waves-on-the-kollam.jpg?s=612x612&w=is&k=20&c=R75FCuXo8G08j2w7wmtP6NQtJV1xhSjkdPItcaF92Jc=",
      Description:"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram."
    },

    {
      id:1,
      title:"Pathanamthitta",
      image:"https://www.shutterstock.com/shutterstock/photos/2362016765/display_1500/stock-photo-nature-view-in-gavi-at-pathanamthitta-2362016765.jpg",
      Description:"Pathanamthitta, is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district."
    }
  ]

}
