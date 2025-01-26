import avatar from "../assets/images/avatar-jessica.jpeg";
import Button from "./Button";
const Container = () => {
  return (
    <div className="w-[450px] h-[625px] rounded-2xl bg-grey-800  flex flex-col items-center px-14 py-7 gap-8 font-inter">
      <img src={avatar} alt="avatar-img" className="w-24 rounded-full" />

      <div className="text-center text-white space-y-2">
        <h1 className="text-3xl">Jessica Randall</h1>
        <h2 className="text-green">London, United Kingdom</h2>
      </div>

      <h3 className="text-white">"Front-end developer and avid reader."</h3>

      <div className="flex flex-col w-full h-full items-center space-y-3">
        <Button content={"GitHub"} />
        <Button content={"Frontend Mentor"} />
        <Button content={"LinkedIn"} />
        <Button content={"Twitter"} />
        <Button content={"Instagram"} />
      </div>
    </div>
  );
}

export default Container