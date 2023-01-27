import Hello from "./Hello";
import ProfileButton from "./ProfileButton";
import Address from "./Address";
export default function WelcomeDeliverProfile() {
  return (
    <div className="mt-[12px] ">
      <div className="flex flex-row justify-between">
        <div className=" grid content-center">
          <Hello />
        </div>
        <div>
          <ProfileButton />
        </div>
      </div>
      <div>
        <div>
          <p>Delivery to</p>
        </div>
        <div>
          <Address />
        </div>
      </div>
    </div>
  );
}
