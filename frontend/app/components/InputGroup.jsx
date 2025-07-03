
'use client';

function InputGroup({ label, id, type = 'text', error,register,step }) {
  return (
    
    
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2"> 
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        step={step}
         {...register}
        required
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
}
export default InputGroup;