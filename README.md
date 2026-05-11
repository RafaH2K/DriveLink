# DriveLink

Connected vehicle telematics platform using OBD-II, ESP32 and LTE connectivity for real-time monitoring, event detection and smart vehicle services.

[English](#english) | [Español](#español)


# English

## Overview

DriveLink is an experimental connected vehicle platform focused on vehicle telemetry, real-time monitoring, automotive IoT and smart vehicle services.

The project aims to collect, process and analyze vehicle data through OBD-II communication and LTE connectivity using embedded systems and backend infrastructure.

DriveLink is being developed as an automotive engineering portfolio project using a Nissan Sentra 2006 Special Edition as the test vehicle.


## Main Objectives

- Collect real-time vehicle telemetry
- Process OBD-II data
- Monitor vehicle status remotely
- Detect driving events and anomalies
- Build automotive IoT infrastructure
- Explore connected vehicle technologies
- Generate specialized telemetry datasets for future AI research


## Features

- Real-time OBD-II telemetry
- RPM, speed and engine temperature monitoring
- Vehicle status monitoring
- GPS tracking
- Remote notifications
- Driving event detection
- Historical telemetry storage
- Smart anti-theft alerts
- LTE cloud connectivity


## System Architecture

```text
Vehicle
   ↓
OBD-II Adapter
   ↓
ESP32 + LTE Module
   ↓
Backend API
   ↓
MongoDB
   ↓
Dashboard / Mobile Notifications
```


## Hardware

- ESP32
- ELM327 OBD-II adapter
- LTE / 4G module
- GPS module
- Nissan Sentra 2006 SE


## Software Stack

### Backend
- Node.js
- Express.js
- MongoDB
- MQTT
- REST API

### Frontend
(Currently in planning)

### Embedded Systems
- ESP32 firmware
- OBD-II communication
- LTE communication


## AI and Dataset Research

One of the long-term goals of DriveLink is to generate specialized vehicle telemetry datasets for future AI and machine learning experimentation.

Potential applications include:

- Driver behavior analysis
- Driving pattern recognition
- Anomaly detection
- Predictive maintenance
- Traffic behavior analysis
- Smart mobility systems

The project aims to explore how real-world vehicle telemetry can be transformed into structured datasets for automotive AI research.


## Planned Features

- Driver scoring system
- Geofencing
- Remote diagnostics
- Vehicle trip history
- Smart anti-theft alerts
- Real-time notifications
- Multi-vehicle support
- Predictive maintenance experimentation


## Project Status

DriveLink is currently in the initial development stage.

The backend infrastructure has already been started, and the hardware architecture for the prototype has been defined.

Current development includes:

- Backend development with Node.js and Express
- Database architecture using MongoDB
- OBD-II communication research
- ESP32 prototyping
- LTE communication planning
- Vehicle telemetry simulation


## Goals

This project was created to explore:

- Automotive IoT
- Embedded systems
- Vehicle telemetry
- Connected vehicle technologies
- Backend infrastructure
- Distributed systems
- Automotive data engineering

with the goal of building a professional automotive engineering portfolio project.


## Author

Rafael Morales  
Engineering student focused on IoT, networking and automotive systems.


# Español

## Descripción General

DriveLink es una plataforma experimental de vehículos conectados enfocada en telemetría vehicular, monitoreo en tiempo real, IoT automotriz y servicios inteligentes para vehículos.

El proyecto busca recolectar, procesar y analizar datos del vehículo mediante comunicación OBD-II y conectividad LTE utilizando sistemas embebidos e infraestructura backend.

DriveLink está siendo desarrollado como un proyecto de portafolio enfocado en ingeniería automotriz utilizando un Nissan Sentra 2006 Special Edition como vehículo de pruebas.


## Objetivos Principales

- Recolectar telemetría vehicular en tiempo real
- Procesar datos OBD-II
- Monitorear el estado del vehículo remotamente
- Detectar eventos y anomalías de conducción
- Construir infraestructura IoT automotriz
- Explorar tecnologías de vehículos conectados
- Generar datasets especializados para futuras investigaciones en IA


## Funcionalidades

- Telemetría OBD-II en tiempo real
- Monitoreo de RPM, velocidad y temperatura del motor
- Monitoreo del estado del vehículo
- Rastreo GPS
- Notificaciones remotas
- Detección de eventos de conducción
- Almacenamiento histórico de telemetría
- Alertas inteligentes antirobo
- Conectividad LTE con la nube


## Arquitectura del Sistema

```text
Vehículo
   ↓
Adaptador OBD-II
   ↓
ESP32 + Módulo LTE
   ↓
API Backend
   ↓
MongoDB
   ↓
Dashboard / Notificaciones móviles
```


## Hardware

- ESP32
- Adaptador OBD-II ELM327
- Módulo LTE / 4G
- Módulo GPS
- Nissan Sentra 2006 SE


## Stack de Software

### Backend
- Node.js
- Express.js
- MongoDB
- MQTT
- API REST

### Frontend
(Actualmente en planeación)

### Sistemas Embebidos
- Firmware para ESP32
- Comunicación OBD-II
- Comunicación LTE


## Investigación en IA y Datasets

Uno de los objetivos a largo plazo de DriveLink es generar datasets especializados de telemetría vehicular para futuros experimentos de inteligencia artificial y machine learning.

Algunas posibles aplicaciones incluyen:

- Análisis de comportamiento de conducción
- Reconocimiento de patrones de manejo
- Detección de anomalías
- Mantenimiento predictivo
- Análisis de tráfico
- Sistemas inteligentes de movilidad

El proyecto busca explorar cómo la telemetría vehicular del mundo real puede transformarse en datasets estructurados para investigación automotriz y de IA.


## Funcionalidades Planeadas

- Sistema de puntuación de conducción
- Geofencing
- Diagnóstico remoto
- Historial de viajes
- Alertas inteligentes antirobo
- Notificaciones en tiempo real
- Soporte para múltiples vehículos
- Experimentación en mantenimiento predictivo


## Estado del Proyecto

Actualmente, DriveLink se encuentra en una etapa inicial de desarrollo.

La infraestructura backend ya comenzó a desarrollarse y la arquitectura de hardware del prototipo ya fue definida.

El desarrollo actual incluye:

- Desarrollo backend con Node.js y Express
- Arquitectura de base de datos con MongoDB
- Investigación de comunicación OBD-II
- Prototipado con ESP32
- Planeación de comunicación LTE
- Simulación de telemetría vehicular


## Objetivos del Proyecto

Este proyecto fue creado para explorar:

- IoT automotriz
- Sistemas embebidos
- Telemetría vehicular
- Tecnologías de vehículos conectados
- Infraestructura backend
- Sistemas distribuidos
- Ingeniería de datos automotrices

con el objetivo de construir un proyecto de portafolio profesional enfocado en ingeniería automotriz.


## Autor

Rafael Morales  
Estudiante de ingeniería enfocado en IoT, redes y sistemas automotrices.
