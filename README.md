# Psychology Appointment Booking System

A modern React-based web application designed for a psychology clinic, featuring a sleek blue/black dark mode interface that switches to blue/white in light mode, with full Persian (Farsi) and RTL support. This app enables patients to sign up, log in, book appointments, manage their schedules, and complete payments — while giving admins control over appointment management.

---

## 🎯 Project Overview

This project serves as a comprehensive appointment booking platform tailored for psychologists and their patients. Key features include:

- Dark mode (blue & black) and light mode (blue & white) with smooth animations
- Right-to-left (RTL) layout optimized for Persian users
- Three main patient options:
  1. User Panel — view upcoming, past, and cancelled appointments
  2. Reserve Appointment — interactive calendar with time slot selection
  3. About Us — clinic contact info and psychologist’s resume
- Dynamic calendar UI that:
  - Shows available and unavailable days
  - Allows selecting a day to pick from 5 predefined time slots
  - Marks fully booked days and reserved slots as disabled (lighter font)
- Appointment booking form with a 350-character description field for patients to describe their issues
- Payment integration with receipt generation including patient and appointment details
- Refund policy allowing cancellations up to 24 hours before appointment time
- Admin panel to postpone appointments in emergencies

---

## 🧩 How It Works

- Patients must **log in or sign up** to reserve or manage appointments.
- The calendar provides the following daily time slots to choose from:
  - 7:30 AM – 9:00 AM
  - 10:00 AM – 11:30 AM
  - 2:30 PM – 4:00 PM
  - 5:00 PM – 6:30 PM
  - 7:00 PM – 8:30 PM
- Fully booked slots and days are shown disabled and cannot be selected.
- Upon successful booking, patients can pay and receive a detailed receipt.
- Cancellations made at least 24 hours before the appointment will be refunded.
- Admins can postpone appointments to the following week in case of emergencies.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/psychology-appointment-app.git
cd psychology-appointment-app
```
