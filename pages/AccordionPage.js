import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "l2kj5",
      label: "Can I use React on project",
      content:
        "You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "tnjrmnrft",
      label: "Can I use JavaScript on project",
      content:
        "You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "rtnrnrtn",
      label: "Can I use Css on project",
      content:
        "You can use React on any project you want.You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}
