import mapMarker from "../assets/marker.svg";
export default function Address() {
  return (
    <div className="flex flex-row">
      <div>
        <img src={mapMarker} alt="" className="w-[20px]" />
      </div>
      <div className="text-[13px]">
        <p>Universitas advent indonesia (Ester Extension No.1)</p>
      </div>
    </div>
  );
}
