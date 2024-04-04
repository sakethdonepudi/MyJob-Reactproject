import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Searchbar from "./components/SearchBar"
import JobCard from "./components/JobCard"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const q = query(collection(db, "Jobs"));
    const querySnapshot = await getDocs(q);
    const tempJobs = [];
    querySnapshot.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id
      });
    });
    setJobs(tempJobs);
    setFilteredJobs(tempJobs); // Initialize filteredJobs with all jobs
  };

  const handleSearch = (jobCriteria) => {
    let filtered = [...jobs]; // Start with all jobs

    // Apply filters based on jobCriteria
    if (jobCriteria.title !== "") {
      filtered = filtered.filter(job => job.title === jobCriteria.title);
    }
    if (jobCriteria.location !== "") {
      filtered = filtered.filter(job => job.location === jobCriteria.location);
    }
    if (jobCriteria.experience !== "") {
      filtered = filtered.filter(job => job.experience === jobCriteria.experience);
    }
    if (jobCriteria.type !== "") {
      filtered = filtered.filter(job => job.type === jobCriteria.type);
    }

    setFilteredJobs(filtered);
  };

  return (
    <>
      <Navbar />
      <Header />
      <Searchbar onSearch={handleSearch} />
      <div>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}

export default App;
