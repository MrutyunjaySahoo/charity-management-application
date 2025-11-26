import React from 'react'
import Swal from 'sweetalert2'
const Volunter = () => {

    function clickHandler()
    {
       
       Swal.fire({
                 title: 'Success',
                 text: `sucessfully joined`,
                 icon: 'success',
                 confirmButtonText: 'ok'
               })

    }
  return (
    <div>
        <section className="py-12 px-4 sm:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-3xl font-semibold mb-4">Become a Volunteer</h3>
    <p className="text-gray-600 mb-8 font-semibold">
      "Join hands with us and be a part of meaningful change. Whether it’s event coordination, fundraising, or field work — we need you!"
    </p>
    <button onClick={clickHandler} className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
      Join as Volunteer
    </button>
  </div>
</section>

      
    </div>
  )
}

export default Volunter
