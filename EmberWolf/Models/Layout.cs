using System;
using System.Collections.Generic;

namespace EmberWolf.Models
{
    public class Layout
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual ICollection<Layout_Section> Layout_Sections { get; set; }
    }
}