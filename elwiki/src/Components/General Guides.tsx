import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function createData(title: string, button: object) {
  return { title, button };
}
const rows = [
  createData(
    "Story",
    <Stack spacing={2} direction="row">
      <Button variant="text">▪ Elsword World</Button>
      <Button variant="text">▪ Lore</Button>
      <Button variant="text">▪ NPCs</Button>
      <Button variant="text">▪ Story </Button>
      <Button variant="text">▪ Timeline </Button>
    </Stack>
  ),
  createData(
    "Gameplay Modes",
    <Stack spacing={2} direction="row">
      <Button variant="text">▪ Dungeons</Button>
      <Button variant="text">▪ Hunting Fields</Button>
      <Button variant="text">▪ PvP</Button>
    </Stack>
  ),
  createData(
    "Gameplay Features ",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Awakening Mode</Button>
        <Button variant="text"> ▪ Character Systems</Button>
        <Button variant="text">▪ Fever </Button>
        <Button variant="text"> ▪ Mana Break</Button>
        <Button variant="text"> ▪ Power-ups </Button>

        <Button variant="text">▪ Resurrection </Button>
        <Button variant="text">▪ Skill Traits </Button>
        <Button variant="text">▪ Special Effect </Button>
        <Button variant="text"> ▪ Stamina </Button>

        <Button variant="text"> ▪ Statistics</Button>
        <Button variant="text">▪ Status Effects </Button>
        <Button variant="text"> ▪ Stoic Thresholds</Button>
      </div>
    </Stack>
  ),
  createData(
    "Character Progression  ",
    <Stack spacing={3} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text"> ▪ 1st Jobs</Button>
        <Button variant="text">▪ 2nd Jobs</Button>
        <Button variant="text">▪ Transcendence</Button>
        <Button variant="text">▪ 3rd Jobs</Button>
        <Button variant="text"> ▪ Master Class</Button>
      </div>
    </Stack>
  ),
  createData(
    "System Guides ",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Bank</Button>
        <Button variant="text"> ▪ El House</Button>
        <Button variant="text">▪ Elrios Hot Springs </Button>
        <Button variant="text"> ▪ Elrios Studio </Button>
        <Button variant="text"> ▪ Item Lock System </Button>

        <Button variant="text">▪ Magic Wardrobe </Button>
        <Button variant="text">▪ Mentor-Pupil System </Button>
        <Button variant="text">▪ Party List System </Button>
        <Button variant="text"> ▪ Profession System </Button>

        <Button variant="text"> ▪ Random Mission System</Button>
        <Button variant="text"> ▪ Wedding System</Button>
      </div>
    </Stack>
  ),
  createData(
    "Life Content",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Fishing</Button>
        <Button variant="text"> ▪ Pet Expedition</Button>
      </div>
    </Stack>
  ),
  createData(
    "Guild Content ",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Guild</Button>
        <Button variant="text"> ▪ Guild Banner System</Button>
        <Button variant="text">▪ Guild Base</Button>
        <Button variant="text">▪ Guild Expedition </Button>
        <Button variant="text"> ▪ Guild Farm System</Button>
      </div>
    </Stack>
  ),
  createData(
    "Items ",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Consumable</Button>
        <Button variant="text"> ▪ Cubes </Button>
        <Button variant="text"> ▪ Currency </Button>
        <Button variant="text"> ▪ Item Database </Button>
        <Button variant="text"> ▪ Monster Cards </Button>
        <Button variant="text"> ▪ Mounts </Button>
        <Button variant="text"> ▪ Pets </Button>
      </div>
    </Stack>
  ),
  createData(
    "Equipment & Accessories",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Arena Sets (S4)</Button>
        <Button variant="text"> ▪ Boss Drops </Button>
        <Button variant="text"> ▪ Equipment Sets </Button>
        <Button variant="text"> ▪ Legend Equipment </Button>
        <Button variant="text"> ▪ Regional Equipment </Button>
        <Button variant="text">
          {" "}
          ▪ Unique Equipment (Amethystine Prophecy Equipment ){" "}
        </Button>
        <Button variant="text">
          {" "}
          ▪ Unique Equipment ( Elrianode Equipment ){" "}
        </Button>
        <Button variant="text">
          {" "}
          ▪ Unique Equipment ( Secret Dungeon Equipment ){" "}
        </Button>
      </div>
    </Stack>
  ),
  createData(
    "Equipment Functions ",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Attributing</Button>
        <Button variant="text"> ▪ Dismantling </Button>
        <Button variant="text"> ▪ Identifying</Button>
        <Button variant="text"> ▪ Imprinting </Button>
        <Button variant="text"> ▪ Mystic Enchant </Button>
        <Button variant="text">▪ Socketing</Button>
        <Button variant="text">▪ Upgrading</Button>
      </div>
    </Stack>
  ),
  createData(
    "Cash ",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Bingo </Button>
        <Button variant="text"> ▪ Character Customization </Button>
        <Button variant="text"> ▪ Ice Burners </Button>
        <Button variant="text"> ▪ Treasure Hunt </Button>
        <Button variant="text"> ▪ Item Mall </Button>
      </div>
    </Stack>
  ),
  createData(
    "Miscellaneous",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Dance Commands </Button>
        <Button variant="text"> ▪ Epic NPCs </Button>
        <Button variant="text"> ▪ Skill Cut-ins </Button>
        <Button variant="text"> ▪ Soundtrack </Button>
        <Button variant="text"> ▪ Wallpapers</Button>
      </div>
    </Stack>
  ),
  createData(
    "Other Media ",
    <Stack spacing={1} direction="row">
      <div style={{ textAlign: "left" }}>
        <Button variant="text">▪ Animation</Button>
        <Button variant="text"> ▪ Elsword Mobile Games </Button>
        <Button variant="text"> ▪ Heart El </Button>
        <Button variant="text"> ▪ Light Novels </Button>
        <Button variant="text"> ▪ Official Merchandise</Button>
        <Button variant="text"> ▪ PROJECT EL★STAR </Button>
        <Button variant="text"> ▪Webcomics</Button>
      </div>
    </Stack>
  ),
];

export const GeneralGuides = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead></TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.button}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ;
    </>
  );
};
