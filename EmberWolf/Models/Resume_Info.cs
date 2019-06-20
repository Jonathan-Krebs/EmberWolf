using System;
using System.Collections.Generic;

namespace EmberWolf.Models
{
    public class Resume_Info
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Score { get; set; }
        public virtual Layout_Section.Resume Resume { get; set; }
    }
}