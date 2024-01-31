{
  /*import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "./Data";
import Header from "./Header";

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: "Summary", headerField: "Id" }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */
}
{
  /*  {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

        export default Kanban;*/
}

import { extend, addClass } from "@syncfusion/ej2-base";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData } from "./Data";

const KanbanBoard = () => {
  let data = extend([], kanbanData, null, true);
  const fields = [
    { text: "ID", key: "Title", type: "TextBox" },
    { key: "Status", type: "DropDown" },
    { key: "Assignee", type: "DropDown" },
    { key: "RankId", type: "TextBox" },
    { key: "Summary", type: "TextArea" },
  ];
  const cardRendered = (args) => {
    let val = args.data.Priority;
    addClass([args.element], val);
  };
  const columnTemplate = (props) => {
    return (
      <div className="header-template-wrap">
        <div className={"header-icon e-icons " + props.keyField}></div>
        <div className="header-text">{props.headerText}</div>
      </div>
    );
  };
  const cardTemplate = (props) => {
    return (
      <div className={"card-template"}>
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-header-title e-tooltip-text">
              {props.Title}
            </div>
          </div>
        </div>
        <div className="e-card-content e-tooltip-text">
          <div className="e-text">{props.Summary}</div>
        </div>
        <div className="e-card-custom-footer">
          {props.Tags.split(",").map((tag) => (
            <div className="e-card-tag-field e-tooltip-text">{tag}</div>
          ))}
          <div className="e-card-avatar">{getString(props.Assignee)}</div>
        </div>
      </div>
    );
  };
  const getString = (assignee) => {
    return assignee
      .match(/\b(\w)/g)
      .join("")
      .toUpperCase();
  };
  return (
    <div className="schedule-control-section">
      <div className="col-lg-12 control-section">
        <div className="control-wrapper">
          <KanbanComponent
            id="kanban"
            cssClass="kanban-overview"
            keyField="Status"
            dataSource={data}
            enableTooltip={true}
            swimlaneSettings={{ keyField: "Assignee" }}
            cardSettings={{
              headerField: "Title",
              template: cardTemplate.bind(this),
              selectionType: "Multiple",
            }}
            dialogSettings={{ fields: fields }}
            cardRendered={cardRendered.bind(this)}
          >
            <ColumnsDirective>
              <ColumnDirective
                headerText="To Do"
                keyField="Open"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="In Progress"
                keyField="InProgress"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="In Review"
                keyField="Review"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
              <ColumnDirective
                headerText="Done"
                keyField="Close"
                allowToggle={true}
                template={columnTemplate.bind(this)}
              />
            </ColumnsDirective>
          </KanbanComponent>
        </div>
      </div>
    </div>
  );
};
export default KanbanBoard;
