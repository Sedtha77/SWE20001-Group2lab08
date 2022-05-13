using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GoToGre.BackEnd
{
    public class StorageManager
    {
        private readonly string _connectionString;
        private readonly BlobServiceClient _blobServiceClient;
        BlobContainerClient _containerClient;
        string containerName = "images";
        public StorageManager(string connectionString) {
            _connectionString = connectionString;
            _blobServiceClient = new BlobServiceClient(_connectionString);
            _containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
            _containerClient.CreateIfNotExists();
        }
        public async Task UploadFile(Stream stream, string name) {
            BlobClient blobClient = _containerClient.GetBlobClient(name);
            await blobClient.UploadAsync(stream);

        }
        public async Task<List<String>> GetAllBlobs() {
            List<string> names = new List<string>();
            await foreach (BlobItem blobItem in _containerClient.GetBlobsAsync()) {
                names.Add(blobItem.Name);
            }
            return names;
        
        }

        
        public async Task<Stream> GetFile(string fileName,Stream ms) {
            BlobClient blobClient = _containerClient.GetBlobClient(fileName);
            await blobClient.DownloadToAsync(ms);
            return ms;
            
        }

    }
}
