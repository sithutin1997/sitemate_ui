"use client";

import React, { useEffect } from "react";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import axios from "axios";


const page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({
        defaultValues: {
          title: null,
          description: null,
        },
      });
    const onSubmit = async(data: any) => {
        const { title, description } = data;
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}posts`, {
            title,
            description
        })
    }
  return (
    <Container maxWidth="md" className="mt-8">
    <h3 className="text-center text-2xl my-4">Add Post</h3>
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
    >
      <TextField
        size="small"
        id="outlined-basic"
        label="title"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("title", {
          required: "Title is required",
        })}
        type="text"
        error={!!errors.title}
        helperText={errors.title ? "Title is required" : ""}
      />
      <TextField
        size="small"
        id="outlined-basic"
        label="Description"
        variant="outlined"
        {...register("description", {
          required: "Description is required",
        })}
        InputLabelProps={{
          shrink: true,
        }}
        error={!!errors.description}
        helperText={errors.description ? "Description is required" : ""}
      />

      <div className="flex gap-20 pb-5">
        {/* <Button
          className="flex-1 bg-blue-600"
          variant="contained"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Button> */}
        <Button
          type="submit"
          variant="contained"
          className="flex-1 bg-blue-600"
        >
          Submit
        </Button>
      </div>
    </form>
  </Container>
  )
}

export default page