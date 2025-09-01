import Sidebar from "./components/Sidebar";

function GRID() {
  return (
    <>
      <Sidebar hasSearch={false} />

      <div className="flex justify-center items-center dark:text-slate-50 text-3xl p-12">
        LISTE DE MANGAS
      </div>

      <div id="container" className="grid grid-cols-3  ml-[12%]">
        <div className="flex flex-col justify-center   items-center w-9/12">
          <img
            className="rounded-md mb-3"
            src="https://m.media-amazon.com/images/I/417RGb7sqAS.jpg"
            alt="SLAMDUNK"
          />

          <h1 className="dark:text-slate-100 mb-10">TITLE</h1>
        </div>
        <div className="flex flex-col justify-center   items-center w-9/12">
          <img
            className="rounded-md mb-3"
            src="https://m.media-amazon.com/images/I/417RGb7sqAS.jpg"
            alt="SLAMDUNK"
          />

          <h1 className="dark:text-slate-100 mb-10">TITLE</h1>
        </div>
        <div className="flex flex-col justify-center   items-center w-9/12 ">
          <img
            className="rounded-md mb-3"
            src="https://m.media-amazon.com/images/I/417RGb7sqAS.jpg"
            alt="SLAMDUNK"
          />

          <h1 className="dark:text-slate-100 mb-10">TITLE</h1>
        </div>

        <div className="flex flex-col justify-center   items-center w-9/12">
          <img
            className="rounded-md mb-3"
            src="https://m.media-amazon.com/images/I/417RGb7sqAS.jpg"
            alt="SLAMDUNK"
          />

          <h1 className="dark:text-slate-100 mb-10">TITLE</h1>
        </div>
        <div className="flex flex-col justify-center   items-center w-9/12">
          <img
            className="rounded-md mb-3"
            src="https://m.media-amazon.com/images/I/417RGb7sqAS.jpg"
            alt="SLAMDUNK"
          />

          <h1 className="dark:text-slate-100 mb-10">TITLE</h1>
        </div>
        <div className="flex flex-col justify-center   items-center w-9/12 ">
          <img
            className="rounded-md mb-3"
            src="https://m.media-amazon.com/images/I/417RGb7sqAS.jpg"
            alt="SLAMDUNK"
          />

          <h1 className="dark:text-slate-100 mb-10">TITLE</h1>
        </div>
      </div>
    </>
  );
}
