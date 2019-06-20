using System;
using System.Collections.Generic;

namespace EmberWolf.Models
{
    public class Portfolio_Item
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }

        public virtual Layout_Section.Portfolio Portfolio { get; set; }
    }
}