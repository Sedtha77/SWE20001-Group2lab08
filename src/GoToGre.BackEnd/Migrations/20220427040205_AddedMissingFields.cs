using Microsoft.EntityFrameworkCore.Migrations;

namespace GoToGre.BackEnd.Migrations
{
    public partial class AddedMissingFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Member",
                newName: "PhoneNumer");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Member",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Member",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Member");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Member");

            migrationBuilder.RenameColumn(
                name: "PhoneNumer",
                table: "Member",
                newName: "Name");
        }
    }
}
