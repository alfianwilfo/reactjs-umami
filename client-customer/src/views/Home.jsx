export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 mt-[12px]">
        <div className="flex flex-row justify-between">
          <div>
            <p>Welcome, Irene</p>
          </div>
          <div>
            <button>Logout</button>
          </div>
        </div>
        <div>
          <div>
            <p>Delivery to</p>
          </div>
          <div>
            <div></div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
