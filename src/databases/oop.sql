--
-- PostgreSQL database dump
--

-- Dumped from database version 12.20
-- Dumped by pg_dump version 15.3

-- Started on 2024-11-14 10:20:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 2200)
-- Name: oop; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA oop;


ALTER SCHEMA oop OWNER TO postgres;

--
-- TOC entry 3034 (class 0 OID 0)
-- Dependencies: 7
-- Name: SCHEMA oop; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA oop IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;
