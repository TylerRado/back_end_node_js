
const express = require('express');
const db = require('./database');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.status(200).send("Hello, you are using Express");
});

app.get('/patients', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Patients(
      patient_id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      date_of_birth DATE NOT NULL,
      gender VARCHAR(255) NOT NULL
    )`;

    db.query(sql, (err) => {
        if (err) {
            console.log('Error creating Patients table', err);
            return res.status(500).send('Error creating Patients table');
        }
        res.status(200).send('Successfully created Patients table');
    });
});

app.get('/doctors', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Doctors(
      doctor_id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      specialization VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      schedule VARCHAR(255) NOT NULL
    )`;

    db.query(sql, (err) => {
        if (err) {
            console.log('Error creating Doctors table', err);
            return res.status(500).send('Error creating Doctors table');
        }
        res.status(200).send('Successfully created Doctors table');
    });
});

app.get('/appointments', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Appointments(
      appointments_id INT AUTO_INCREMENT PRIMARY KEY,
      patient_id INT NOT NULL,
      doctor_id INT NOT NULL,
      appointment_date DATE NOT NULL,
      appointment_time TIME NOT NULL,
      status VARCHAR(255) NOT NULL
    )`;

    db.query(sql, (err) => {
        if (err) {
            console.log('Error creating Appointments table', err);
            return res.status(500).send('Error creating Appointments table');
        }
        res.status(200).send('Successfully created Appointments table');
    });
});

app.get('/admin', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Admin(
      admin_id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL
    )`;

    db.query(sql, (err) => {
        if (err) {
            console.log('Error creating Admin table', err);
            return res.status(500).send('Error creating Admin table');
        }
        res.status(200).send('Successfully created Admin table');
    });
});

app.listen(port, () => {
    console.log(`Server is running successfully on http://localhost:${port}`);
});

