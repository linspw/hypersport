 <LineChart width={this.state.PainelWidth} height={this.state.PainelHeight} data={this.props.data} margin={{ top: 10, right:30, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey={this.state.datakey} stroke="#8884d8" />
                    <CartesianGrid /> /*stroke="#069" strokeDasharray="10 10" */
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>