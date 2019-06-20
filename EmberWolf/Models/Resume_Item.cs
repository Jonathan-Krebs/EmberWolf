using System;
using System.Collections.Generic;

namespace EmberWolf.Models
{
    public class Resume_Item
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Body { get; set; }

        public virtual Layout_Section.Resume Resume { get; set; }
    }
}