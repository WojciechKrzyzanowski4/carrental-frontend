import React from 'react'

const ReservationCard = (reservation) => {
  return (
    <div key={reservation.id} className="relative flex flex-col items-center justify-center rounded-xl bg-center bg-[#253237] bg-overflow-hidden shadow-lg">
        <h2 className="mb-4 font-sans text-xl font-semibold text-white"> Reservation for: {reservation.reservationDate}</h2>
        <h2 className="mb-4 font-sans text-xl font-semibold text-white"> The reservation is for this offer: {reservation.offer.name}</h2>
        <h2 className="mb-4 font-sans text-xl font-semibold text-white"> The description for this offer: {reservation.offer.description}</h2>
        <h2 className="mb-4 font-sans text-xl font-semibold text-white"> The offer is for this car: {reservation.offer?.brand} {reservation.offer.model} {reservation.offer.year}</h2>
        <h2 className="mb-4 font-sans text-xl font-semibold text-white"> The reservation was made by: {reservation.user.name} </h2>
        <h2 className="mb-4 font-sans text-xl font-semibold text-white"> The contact email for this reservation is: {reservation.user.email}</h2>
    </div>
  )
}

export default ReservationCard

