
import SeatPicker from "react-seat-picker";
import "./styles.css";

export default function App() {
  const rows = [
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
    
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
   
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
     
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 , isReserved: true},
  
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
     
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
    
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
    
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 , isReserved: true},
      { number: 6 },
      { number: 7 },
     
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
    
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
     
    ],
    [
      { number: 1 , isReserved: true},
      { number: 2 },
      { number: 3 },
      
    ],
    
    
  ];
  return (
    <div className="App">
      <h1>Seat Reservation</h1>
      <SeatPicker rows={rows} maxReservableSeats={7} visible />
     
    </div>
  );
}
