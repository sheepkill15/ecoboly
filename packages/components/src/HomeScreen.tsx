import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button as NativeButton,
} from "react-native";
import store from "./firebase/datastore";
import { HomeScreenNavigationProp, Post } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "react-native-themed-styles";
import { Theme } from "./settings/styles";
import SettingsStore from "./settings/SettingsStore";
import { getDatabase, getFirestore } from "./firebase/firebase";
import AdBanner from "./loaders/ads";
import DataStore from "./firebase/datastore";
import { CodeRegExTeacher } from "./constants";

import {
  Button,
  Box,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Paper,
  Divider,
  CircularProgress,
  InputAdornment,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {
  ThemeProvider,
  useTheme as materialUseTheme,
  createTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  country: string;
  population: number;
  underAge: number;
  topAge: number;
  active: number;
  inactive: number;
  foglalkoztatott: number;
  unemployed: number;
  alkalmazott: number;
  another: number;
};
const HomeScreen = () =>
  /*{navigation}: Props */
  {
    const code = store.useStoreState((state) => state.userCode);

    const currTheme = SettingsStore.useStoreState(
      (state) => state.selectedTheme
    );

    const [styles] = useTheme(Theme, currTheme);

    const [question, setQuestion] = useState({
      q: "Betöltés...",
      id: -1,
    });
    const [alreadyQ, setAlreadyQ] = useState(false);
    const [alreadySent, setAlreadySent] = useState(false);

    useEffect(() => {
      const fetchLastQuestion = async () => {
        const values: Post[] = (
          await getDatabase().ref("/posts/").once("value")
        ).val();
        const savedId = await AsyncStorage.getItem(
          "@last_question"
        ).catch((e) => console.log(e));
        if (parseInt(savedId ?? "-1", 10) === values.length - 1) {
          setAlreadyQ(true);
        } else {
          console.log("fail");
        }
        setQuestion({
          q: values[values.length - 1].kerdes,
          id: values.length - 1,
        });
      };
      fetchLastQuestion();
      console.log("Fetch questions!");

      // Check if the user has sent in a response to the form
      const hasSent = async () => {
        const result = await AsyncStorage.getItem("@sent_form").catch((e) =>
          console.error(e)
        );

        if (result == "true") {
          setAlreadySent(true);
        }
      };

      hasSent();
    }, []);

    const handleYes = () => {
      if (question.id < 0) return;

      saveWas();
      console.log("Fetch yes!");
      const ref = getDatabase().ref(`/posts/${question.id}/valaszIgen`);
      return ref.transaction((current: number | undefined) => {
        if (!current) {
          return 1;
        }
        return current + 1;
      });
    };
    const handleNo = () => {
      if (question.id < 0) return;

      saveWas();
      console.log("Fetch no!");
      const ref = getDatabase().ref(`/posts/${question.id}/valaszNem`);
      return ref.transaction((current: number | undefined) => {
        if (!current) {
          return 1;
        }
        return current + 1;
      });
    };

    const saveWas = () => {
      AsyncStorage.setItem("@last_question", question.id.toString());
      setAlreadyQ(true);
    };

    // Validation
    const currCode = DataStore.useStoreState((state) => state.userCode);

    // Material-UI Stuff
    let theme = materialUseTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            type: prefersDarkMode ? "dark" : "light",
          },
        }),
      [prefersDarkMode]
    );

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [sending, setSending] = useState(false);
    const [statistics, setStatistics] = useState<Array<Inputs>>([]);

    // Form stuff
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();

    const [numberError, setNumberError] = useState(false);
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
        setSending(true);
        setNumberError(false);
        Object.keys(data).forEach((key) => {
          if (key != "country") {
            data[key] = Number(data[key]);
            if (isNaN(data[key])) {
              setNumberError(true);
              throw "Paramater is not a number!";
            }
          }
        });

        console.log(data);

        const ref = getFirestore().collection("orszagadat");
        ref
          .doc()
          .set(data)
          .then(() => {
            console.log("Upload finished");
            AsyncStorage.setItem("@sent_form", "true");
            setAlreadySent(true);
          });
      } catch (err) {
        console.error(err);
      } finally {
        setSending(false);
      }
    };

    const fetchStatistics = () => {
      const ref = getFirestore().collection("orszagadat");

      const result: Array<any> = [];

      ref
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            result.push(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        })
        .finally(() => {
          setStatistics(result);
          console.log("Statistics fetched and set");
          console.log(result);
        });
    };

    const eraseStatistics = () => {
      const ref = getFirestore().collection("orszagadat");

      ref
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            ref.doc(doc.id).delete();
          });
        })
        .catch((error) => {
          console.log("Error erasing documents: ", error);
        })
        .finally(() => {
          console.log("Statistics erased");
        });
    };

    // Charts Things
    const [currentlyGraphing, setCurrentlyGraphing] = useState("underAge");

    const CustomTooltip = (p: any) => {
      const { active, payload, label } = p;

      if (active && payload && payload.length) {
        return (
          <div
            style={{
              background: "white",
              color: "black",
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 10,
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            <p>{`${payload[0].value} - ${payload[1].value}`}</p>
            <p>{payload[1].value / payload[0].value}</p>
          </div>
        );
      }

      return null;
    };

    return (
      <ScrollView>
        <View style={styles.itemList}>
          <Text style={styles.largeText}>Üdvözlet!</Text>
          <Text style={styles.smallText}>A kódod: {code}</Text>
        </View>
        <View style={styles.itemList}>
          <Text style={styles.largeText}>Legutolsó kérdés</Text>
          <Text style={styles.mediumText}>{question.q}</Text>
          {!alreadyQ ? (
            <View style={styles.buttonBox}>
              <TouchableOpacity style={styles.button} onPress={handleYes}>
                <Text style={styles.mediumText}>Igen</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNo}>
                <Text style={styles.mediumText}>Nem</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.smallText}>Erre a kérdésre már szavaztál!</Text>
          )}{" "}
        </View>

        <View style={styles.itemList}>
          <Text style={styles.largeText}>Posztok</Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <AdBanner />
        </View>

        <Box sx={{ mt: 1, mb: 1, mr: 1, ml: 1 }}>
          <ThemeProvider theme={theme}>
            <Card elevation={20}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardHeader
                  title={
                    <TextField
                      variant="filled"
                      margin="dense"
                      label="Ország neve"
                      {...register("country", { required: true })}
                      helperText={errors.country && "Ez a bemenet kötelező"}
                      error={errors.country ? true : false}
                      disabled={alreadySent}
                    />
                  }
                  subheader="Töltsd ki a táblázatot"
                />
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {!isTablet && (
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateRows: "repeat(3, 1fr)",
                          mr: 2,
                          gridGap: 15,
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Összlakosság"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("population", { required: true })}
                          helperText={
                            errors.population && "Ez a bemenet kötelező"
                          }
                          error={errors.population ? true : false}
                          disabled={alreadySent}
                        />
                        <TextField
                          id="outlined-basic"
                          label="15 év alatt"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("underAge", { required: true })}
                          helperText={
                            errors.underAge && "Ez a bemenet kötelező"
                          }
                          error={errors.underAge ? true : false}
                          disabled={alreadySent}
                        />
                        <TextField
                          id="outlined-basic"
                          label="15 év felett"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("topAge", { required: true })}
                          helperText={errors.topAge && "Ez a bemenet kötelező"}
                          error={errors.topAge ? true : false}
                          disabled={alreadySent}
                        />
                        <Divider />
                        <TextField
                          id="outlined-basic"
                          label="Aktív tagok"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("active", { required: true })}
                          helperText={errors.active && "Ez a bemenet kötelező"}
                          error={errors.active ? true : false}
                          disabled={alreadySent}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Inaktív tagok"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("inactive", { required: true })}
                          helperText={
                            errors.inactive && "Ez a bemenet kötelező"
                          }
                          error={errors.inactive ? true : false}
                          disabled={alreadySent}
                        />
                        <Divider />
                        <TextField
                          id="outlined-basic"
                          label="Foglalkoztatott"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("foglalkoztatott", { required: true })}
                          helperText={
                            errors.foglalkoztatott && "Ez a bemenet kötelező"
                          }
                          error={errors.foglalkoztatott ? true : false}
                          disabled={alreadySent}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Munkanélküli"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("unemployed", { required: true })}
                          helperText={
                            errors.unemployed && "Ez a bemenet kötelező"
                          }
                          error={errors.unemployed ? true : false}
                          disabled={alreadySent}
                        />
                        <Divider />
                        <TextField
                          id="outlined-basic"
                          label="Alkalmazott"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("alkalmazott", { required: true })}
                          helperText={
                            errors.alkalmazott && "Ez a bemenet kötelező"
                          }
                          error={errors.alkalmazott ? true : false}
                          disabled={alreadySent}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Más kategória"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                millió
                              </InputAdornment>
                            ),
                          }}
                          {...register("another", { required: true })}
                          helperText={errors.another && "Ez a bemenet kötelező"}
                          error={errors.another ? true : false}
                          disabled={alreadySent}
                        />
                      </Box>
                    )}
                    {isTablet && (
                      <Box
                        sx={{
                          ml: !isTablet ? 2 : 0,
                          flexGrow: 1,
                        }}
                      >
                        <Paper variant="outlined">
                          <ResponsiveContainer width="100%" height={500}>
                            <BarChart width={300} data={statistics}>
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Legend />
                              <Bar dataKey="population" fill="#22d652" />
                              <Bar dataKey={currentlyGraphing} fill="#249ee0" />
                              <Tooltip content={<CustomTooltip />} />
                            </BarChart>
                          </ResponsiveContainer>
                        </Paper>
                      </Box>
                    )}
                  </Box>
                </CardContent>
                <CardActions disableSpacing>
                  {!sending && !isTablet && (
                    <Button type="submit" disabled={alreadySent}>
                      Beküld
                    </Button>
                  )}
                  {sending && (
                    <CircularProgress
                      style={{
                        width: 30,
                        height: 30,
                        marginLeft: 8,
                        marginRight: 8,
                      }}
                    />
                  )}
                  {isTablet && (
                    <Button onClick={fetchStatistics}>
                      Diagram frissítése
                    </Button>
                  )}
                  {isDesktop && (
                    <Button
                      onClick={handleExpandClick}
                      style={{ marginLeft: "auto" }}
                    >
                      {!expanded && "Több"}
                      {expanded && "Kevesebb"}
                    </Button>
                  )}
                  {numberError && (
                    <Alert severity="error" style={{ marginLeft: 20 }}>
                      Csak számokat adhatsz meg!
                    </Alert>
                  )}
                </CardActions>
              </form>
              {isDesktop && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("population");
                        }}
                      >
                        Összlakosság
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("underAge");
                        }}
                      >
                        15 év alatt
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("topAge");
                        }}
                      >
                        15 év felett
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("active");
                        }}
                      >
                        Aktív tagok
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("inactive");
                        }}
                      >
                        Inaktív tagok
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("foglalkoztatott");
                        }}
                      >
                        Foglalkoztatott
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("unemployed");
                        }}
                      >
                        Munkanélküli
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("alkalmazott");
                        }}
                      >
                        Alkalmazott
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setCurrentlyGraphing("another");
                        }}
                      >
                        Más kategória
                      </Button>
                    </Box>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Ország</TableCell>
                            <TableCell align="right">Összlakosság</TableCell>
                            <TableCell align="right">
                              15 év alatt&nbsp;
                            </TableCell>
                            <TableCell align="right">
                              15 év felett&nbsp;
                            </TableCell>
                            <TableCell align="right">
                              Aktív tagok&nbsp;
                            </TableCell>
                            <TableCell align="right">
                              Inaktív tagok&nbsp;
                            </TableCell>
                            <TableCell align="right">
                              Foglalkoztatott&nbsp;
                            </TableCell>
                            <TableCell align="right">
                              Munkanélküli&nbsp;
                            </TableCell>
                            <TableCell align="right">
                              Alkalmazott&nbsp;
                            </TableCell>
                            <TableCell align="right">
                              Más kategória&nbsp;
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {statistics.map((data: Inputs, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">
                                {data.country}
                              </TableCell>
                              <TableCell align="right">
                                {data.population}
                              </TableCell>
                              <TableCell align="right">
                                {data.underAge}
                              </TableCell>
                              <TableCell align="right">{data.topAge}</TableCell>
                              <TableCell align="right">{data.active}</TableCell>
                              <TableCell align="right">
                                {data.inactive}
                              </TableCell>
                              <TableCell align="right">
                                {data.foglalkoztatott}
                              </TableCell>
                              <TableCell align="right">
                                {data.unemployed}
                              </TableCell>
                              <TableCell align="right">
                                {data.alkalmazott}
                              </TableCell>
                              <TableCell align="right">
                                {data.another}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Collapse>
              )}
            </Card>
          </ThemeProvider>
        </Box>
        {currCode.match(CodeRegExTeacher) ? (
          <NativeButton
            onPress={eraseStatistics}
            title="Statisztikai adatok törlése"
            color="#ab0000"
          />
        ) : (
          <></>
        )}
      </ScrollView>
    );
  };
export default HomeScreen;
