using System;
using System.Collections.Generic;

namespace EmberWolf.Models
{
    public class Layout_Section
    {
        public int Id { get; set; }
        public int LayoutId { get; set; }

        public virtual Layout Layout { get; set; }

        public class Navbar
        {
            public string Title { get; set; }
            public string Name { get; set; }
            public bool Menu { get; set; }
        }

        public class DoorMat
        {
            public int Style { get; set; }
            public string Title { get; set; }
            public string Text { get; set; }
        }

        public class CoverLetter
        {
            public string Title { get; set; }
            public string Text { get; set; }
        }

        public class Resume
        {
            public int Id { get; set; }
            public class Details
            {
                public string Phone { get; set; }
                public string Email { get; set; }
                public string Licence { get; set; }
            }
            public string Title { get; set; }
            public virtual Resume_Item Profile { get; set; }
            public virtual Resume_Item EmploymentHistory { get; set; }
            public virtual Resume_Item Education { get; set; }
            public virtual Resume_Item ExtraCurricular { get; set; }
            public virtual ICollection<Resume_Item> OtherSections { get; set; }
        }

        public class Portfolio
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public virtual ICollection<Portfolio_Item> Portfolio_Items { get; set; }
        }

        public class Footer
        {
            public string Title { get; set; }
            public string Subtitle { get; set; }
            public string Facebook { get; set; }
            public string Pinterest { get; set; }
            public string Dribble { get; set; }
            public string Behance { get; set; }
            public string Linkedin { get; set; }
            public string Personal { get; set; }
        }
    }
}