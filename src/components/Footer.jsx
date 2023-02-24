import { github, linkedin, glassdoor } from "../assets";

function Footer() {
  return (
    <footer className="bg-[#222] border-solid border-t-[2.5px] border-[#db2777] bg-opacity-50 flex justify-center items-center flex-col h-[180px]">
      <div className="m-3">
        <p className="text-[#555] font-semibold">
          2023. © This page was developed by Rodrigo 'Moonlight'.
        </p>
      </div>
      <div className="flex flex-row m-3 opacity-50">
        <a href="" className="m-3" title="GitHub">
          <img src={github} alt="GitHub" className="w-[32px] h-[32px]" />
        </a>
        <a href="" className="m-3" title="GlassDoor">
          <img src={glassdoor} alt="GlassDoor" className="w-[32px] h-[32px]" />
        </a>
        <a href="" className="m-3" title="LinkedIn">
          <img src={linkedin} alt="LinkedIn" className="w-[32px] h-[32px]" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
