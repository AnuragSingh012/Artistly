"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useArtists } from "@/context/ArtistContext";
import { toast } from "sonner";
import { categories } from "@/constants";
import { languages } from "@/constants";
import { feeRanges } from "@/constants";


const ArtistForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const { addArtist } = useArtists();
  const router = useRouter();

  const onSubmit = async (data) => {
    const newArtist = {
      id: Date.now(),
      name: data.name,
      bio: data.bio,
      category: data.category,
      location: data.location,
      price: data.price,
      languages: data.languages,
    };

    addArtist(newArtist);
    toast.success("Artist added sucessfully");
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="artist-form space-y-6">
      <div>
        <label htmlFor="name" className="artist-form_label">Name</label>
        <Input id="name" {...register("name", { required: "Name is required" })} className="artist-form_input" placeholder="Enter name" />
        {errors.name && <p className="artist-form_error">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="bio" className="artist-form_label">Bio</label>
        <Input id="bio" {...register("bio", { required: "Bio is required" })} className="artist-form_input" placeholder="Short bio..." />
        {errors.bio && <p className="artist-form_error">{errors.bio.message}</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="category" className="artist-form_label">Category</label>
        <select
          id="category"
          {...register("category", { required: "Category is required" })}
          className="dropdown-menu"
        >
          <option value="">Select</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <p className="artist-form_error">{errors.category.message}</p>}
      </div>

      <div>
        <p className="artist-form_label">Languages Spoken</p>
        <div className="flex flex-wrap gap-3 mt-4">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input type="checkbox" value={lang} {...register("languages", { required: "Select at least one language" })} />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages && <p className="artist-form_error">{errors.languages.message}</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="price" className="artist-form_label">Fee Range</label>
        <select id="price" {...register("price", { required: "Select a price range" })} className="dropdown-menu">
          <option value="">Select</option>
          {feeRanges.map((fee) => (
            <option key={fee} value={fee}>{fee}</option>
          ))}
        </select>
        {errors.price && <p className="artist-form_error">{errors.price.message}</p>}
      </div>

      <div>
        <label htmlFor="location" className="artist-form_label">Location</label>
        <Input id="location" {...register("location", { required: "Location is required" })} className="artist-form_input" placeholder="City or region" />
        {errors.location && <p className="artist-form_error">{errors.location.message}</p>}
      </div>

      <Button type="submit" className="artist-form_btn text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ArtistForm;
