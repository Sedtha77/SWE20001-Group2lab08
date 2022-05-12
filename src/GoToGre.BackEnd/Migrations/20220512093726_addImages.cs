using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace GoToGre.BackEnd.Migrations
{
    public partial class addImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNumer",
                table: "Member",
                newName: "PhoneNumber");

            migrationBuilder.RenameColumn(
                name: "DateOfBirtch",
                table: "Member",
                newName: "DateOfBirth");

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<Guid>(type: "uuid", nullable: false),
                    FileType = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Member",
                newName: "PhoneNumer");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Member",
                newName: "DateOfBirtch");
        }
    }
}
