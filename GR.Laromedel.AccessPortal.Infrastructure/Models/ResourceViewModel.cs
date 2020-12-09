using System;
using System.Collections.Generic;
using System.Linq;

namespace GR.Laromedel.AccessPortal.Infrastructure.Models
{
    public class ResourceViewModel
    {
        public Guid ArticleId { get; set; }
        public string Title { get; set; }
        public string ResourceUri { get; set; }
        public string ArticleNumber { get; set; }
        public string CollectionTitle { get; set; }
        public string CollectionPartNumber { get; set; } // like "2" or "2/10"
        public string CoverImageThumb { get; set; }
        public string CoverImageFull { get; set; }
        public int Edition { get; set; }
        public string Description { get; set; }
        public string Contributors { get; set; }
        public List<string> DisplayLanguages => Languages?.Split(',')?.ToList();
        public string Languages { get; set; }
        public string SupplierName { get; set; }
        public List<string> Subjects { get; set; }
        public List<string> Grades { get; set; }
    }

    public class LicenseModel
    {
        public Guid ArticleId { get; set; }
        public string Url { get; set; }
    }
}
