using Microsoft.EntityFrameworkCore.Migrations;

namespace GoToGre.BackEnd.Migrations
{
    public partial class fixedTypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateOfBirtch",
                table: "Member",
                newName: "DateOfBirth");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Member",
                newName: "DateOfBirtch");
        }
    }
}
