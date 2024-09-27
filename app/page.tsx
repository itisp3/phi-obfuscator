import FileSelector from "./fileSelector";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="text-sm text-center sm:text-left">
          <li className="mb-2">
            Please select file(s) to remove PHI:
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
         <FileSelector />
        </div>
      </main>
    </div>
  );
}
