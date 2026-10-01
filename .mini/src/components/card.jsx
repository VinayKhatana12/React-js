import React from 'react'
import { Bookmark, BriefcaseBusiness, Clock3, MapPin } from 'lucide-react'

const Card = () => {
  return (
    <>
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="data:image/jpeg;base64,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" alt=""></img>
          <button className="save-button" type="button" aria-label="Save this job">
            <Bookmark size={16} />
            <span>Save</span>
          </button>
        </div>
        <div className="center">
          <div className="company-row">
            <h3>Apple</h3>
            <span>5 days ago</span>
          </div>
        <h2>Senior UI/UX Designer</h2>
        <div className="tag">
          <h4><Clock3 size={14} /> Part Time</h4>
          <h4><BriefcaseBusiness size={14} /> Senior Level</h4>
        </div>
        </div>
        <div className="bottom">
          <div className="pay-details">
            <h3>$130 <span>per hour</span></h3>
            <p><MapPin size={14} /> New York, USA</p>
          </div>
          <button className="apply-button" type="button">Apply Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card