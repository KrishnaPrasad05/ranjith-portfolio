
import mob1 from "../../assets/mob1.png";
import mob2 from "../../assets/mob2.png";
import mob3 from "../../assets/mob3.png";
import mob4 from "../../assets/mob4.png";
import MobileCard from "../../components/MobileCard";

const MobileApp = () => {
  return (
    <div className="container my-5">
      <div className="row">
<div className="col-12 col-md-6">
 <MobileCard
          title="Fuel Delivery App"
          description="Designed a user-friendly fuel delivery mobile application focused on real-time tracking, seamless booking, and secure digital payments"
          timeline="3 Months"
          role="UI/UX Designer"
          device={"Mobile Application"}
          image={mob1}
          onClick={() => window.open("#", "_blank")}
        />
</div>
<div className="col-12 col-md-6">
 <MobileCard
          title="Indoor Air Quality"
          description="Designed an IoT-based indoor air quality monitoring app focused on real-time visualization, alert systems, and user-friendly dashboard."
          timeline="3 Months"
          role="UI/UX Designer"
          device={"Mobile Application"}
          image={mob2}
          onClick={() => window.open("#", "_blank")}
        />
</div>
       

      </div>
      <div className="row">
<div className="col-12 col-md-6">
 <MobileCard
          title="Oil Monitoring "
          description="Designed a dark-themed oil monitoring dashboard focused on real-time data tracking, alert visualization, and industrial-grade UI clarity"
          timeline="3 Months"
          role="UI/UX Designer"
          device={"Web & Mobile Application"}
          image={mob3}
          onClick={() => window.open("#", "_blank")}
        />
</div>
<div className="col-12 col-md-6">
 <MobileCard
          title="Water Automation"
          description="Designed a smart water automation platform focused on real-time monitoring, motor control, and efficient water management."
          timeline="3 Months"
          role="UI/UX Designer"
          device={"Web & Mobile Application"}
          image={mob4}
          onClick={() => window.open("#", "_blank")}
        />
</div>
       

      </div>
    </div>
  );
};

export default MobileApp;