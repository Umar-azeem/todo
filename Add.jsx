 function Add({
   add,
  deleteArray,
  setUpdateEdit,  
  updateEdit,
  updateArray,
  editIndex,  
  setEditIndex, 
}) {
  return (
    <>
      {" "}
      {add.map((item, index) => (
        <div class="flex mb-4 items-center border border-black p-2 rounded-lg">
          {editIndex === index ? (
            <input
              type="text"
              defaultValue={item}
              onChange={(e) => setUpdateEdit(e.target.value)}
            />
          ) : (
            <p key={index} class="w-full text-grey-darkest">
              {item}
            </p>
          )}
          
          {editIndex === index ? (
            <button
              onClick={() => updateArray()}
              class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded bg-blue-700 hover:text-white text-green border-green hover:bg-green"
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => setEditIndex(index)}
              class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded bg-blue-700 hover:text-white text-green border-green hover:bg-green"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => deleteArray(item)}
            class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red bg-red-700 hover:text-white hover:bg-red"
          >
            Remove
          </button>
        </div>
      ))}
      ;
    </>
  );
}
export default Add;




