using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TodoAPI.Models
{
    public class Todo
    {
        public int TodoId { get; set; }


        public string Newtext { get; set; }

        public string Value { get; set; }

        public int Number { get; set; }
    }
}