using System;
using System.Collections.Generic;

namespace GR.Laromedel.AccessPortal.Services.Models
{
    public class LaromedelResourceModel
    {
        public string Title { get; set; }
        public string ArticleNumber { get; set; }
        public List<string> Categories { get; set; }
        public string CollectionTitle { get; set; }
        public string CollectionPartNumber { get; set; }
        public string CoverImageThumb { get; set; }
        public string CoverImageFull { get; set; }
        public int Edition { get; set; }
        public string Description { get; set; }
        public string Contributors { get; set; }
        public string Languages { get; set; }
        public string SupplierName { get; set; }
        public List<string> Subjects { get; set; }
        public List<string> Grades { get; set; }}
    }
}
