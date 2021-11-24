using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiCrudMaestro.Models
{
    public class Municipios
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ConsecutivoInterno { get; set; }
        public string Nombre { get; set; }
        public string Departamento { get; set; }
        public string CodigoDane { get; set; }
        public bool Distrito { get; set; }
    }
}
