"use client";

import { deleteBooking } from "../_lib/actions";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

const ReservationList = ({bookings}) => {

    // const [optimisticBookings, optimisticDelete] = useOptimistic(
    //     bookings, // initial state
    // // updateFn
    // (currentBookings, bookingId) => {
    //   // merge and return new state
    //   // with optimistic value
    //   return currentBookings.filter((booking) => booking.id !== bookingId);
    // }
    // );
    const [optimisticBookings, optimisticDelete] = useOptimistic(
      bookings,
      (curBookings, bookingId) => {
        return curBookings.filter((booking) => booking.id !== bookingId);
      }
    );

    async function handleDelete(bookingId) {
        optimisticDelete(bookingId);
        await deleteBooking(bookingId);
    }

  return (
    // <ul className="space-y-6">
    //   {bookings.map((booking) => (
    //   {optimisticBookings.map((booking) => (
    //     <ReservationCard onDelete={handleDelete} booking={booking} key={booking.id} />
    //   ))}
    // </ul>
    <ul className="space-y-6">
    {optimisticBookings.map((booking) => (
      <ReservationCard
        booking={booking}
        onDelete={handleDelete}
        key={booking.id}
      />
    ))}
  </ul>
  );
};

export default ReservationList;
