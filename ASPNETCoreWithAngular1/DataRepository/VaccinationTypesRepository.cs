using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DataRepository
{
   public  class VaccinationTypesRepository
    {
        [Key]
        public int Id { get; set; }
        public string Name  { get; set; }

       


    }
}